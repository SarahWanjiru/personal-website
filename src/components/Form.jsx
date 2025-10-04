import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Send, Loader2, CheckCircle, ArrowLeft, Clock } from "lucide-react";

// Cookie utility functions
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
};

const setCookie = (name, value, days) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const getDailySubmissions = () => {
  const today = new Date().toDateString();
  const cookie = getCookie("dailySubmissions");

  if (!cookie) return { date: today, count: 0 };

  try {
    const data = JSON.parse(cookie);
    // Reset count if it's a new day
    if (data.date !== today) {
      return { date: today, count: 0 };
    }
    return data;
  } catch (e) {
    return { date: today, count: 0 };
  }
};

const updateDailySubmissions = (count) => {
  const today = new Date().toDateString();
  const data = { date: today, count };
  setCookie("dailySubmissions", JSON.stringify(data), 1); // Expires in 1 day
};

const Form = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0);
  const [dailySubmissions, setDailySubmissions] = useState({
    date: "",
    count: 0,
  });

  // EmailJS configuration
  const emailConfig = {
    serviceId: process.env.REACT_APP_EMAIL_SERVICE_ID,
    templateId: process.env.REACT_APP_EMAIL_TEMPLATE_ID,
    publicKey: process.env.REACT_APP_EMAIL_PUBLIC_KEY,
  };

  // Load daily submissions data on component mount
  useEffect(() => {
    const submissions = getDailySubmissions();
    setDailySubmissions(submissions);

    // Debug log to verify environment variables are loaded
    console.log("EmailJS Config:", {
      serviceId: emailConfig.serviceId,
      templateId: emailConfig.templateId,
      publicKey: emailConfig.publicKey
        ? `${emailConfig.publicKey.substring(0, 8)}...`
        : "undefined",
    });
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    // Clear any previous errors
    setError("");

    // Check daily submission limit (2 per day)
    const currentSubmissions = getDailySubmissions();
    if (currentSubmissions.count >= 2) {
      setError(
        "Daily submission limit reached. You can send up to 2 messages per day. Please try again tomorrow."
      );
      return;
    }

    // Spam prevention - 30 second cooldown
    const now = Date.now();
    if (now - lastSubmissionTime < 30000) {
      setError("Please wait a moment before sending another message.");
      return;
    }

    setIsLoading(true);

    const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        form.current,
        emailConfig.publicKey
      );

      // Success - show success state and hide form
      setIsSuccess(true);
      setLastSubmissionTime(now);
      form.current.reset();

      // Update daily submission count
      const updatedSubmissions = getDailySubmissions();
      updatedSubmissions.count += 1;
      updateDailySubmissions(updatedSubmissions.count);
      setDailySubmissions(updatedSubmissions);

      // Auto-hide success message after 10 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 10000);
    } catch (error) {
      setError(
        "Failed to send message. Please try again or contact me directly."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setError("");

    // Reset form after component re-renders (when form.current is available)
    setTimeout(() => {
      if (form.current) {
        form.current.reset();
      }
    }, 0);

    // Refresh daily submissions data in case the day has changed
    const submissions = getDailySubmissions();
    setDailySubmissions(submissions);
  };

  // Success state - show success message instead of form
  if (isSuccess) {
    return (
      <div className="text-center space-y-6 py-8">
        <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-primary-600" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-secondary-900">
            Message Sent Successfully!
          </h3>
          <p className="text-secondary-600">
            Thank you for reaching out! I'll get back to you within 24 hours.
          </p>
        </div>
        <button
          onClick={resetForm}
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Error message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      {/* Daily submission status */}
      {dailySubmissions.count > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <p className="text-blue-700 text-sm">
              {dailySubmissions.count === 1
                ? "1 message sent today. You have 1 message remaining."
                : `${dailySubmissions.count} messages sent today. ${
                    2 - dailySubmissions.count
                  } remaining.`}
            </p>
          </div>
        </div>
      )}

      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-secondary-700"
            >
              Your Name *
            </label>
            <input
              className="w-full px-4 py-3 bg-secondary-50 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 outline-none"
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-secondary-700"
            >
              Your Email *
            </label>
            <input
              className="w-full px-4 py-3 bg-secondary-50 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 outline-none"
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-secondary-700"
          >
            Message *
          </label>
          <textarea
            className="w-full px-4 py-3 bg-secondary-50 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 outline-none resize-none"
            name="message"
            id="message"
            rows="6"
            placeholder="Tell me about your project, your requirements, or just say hello!"
            required
          ></textarea>
        </div>

        <button
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 disabled:from-secondary-400 disabled:to-secondary-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-medium hover:shadow-strong disabled:shadow-none"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default Form;
