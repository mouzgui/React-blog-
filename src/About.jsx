import React from "react";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-4">
        Welcome to our website! We are passionate about sharing knowledge and
        experiences that inspire and empower individuals. Our team is committed
        to delivering high-quality content and resources across various topics,
        aiming to provide value and insight to our audience.
      </p>
      <p className="text-lg text-gray-600 leading-relaxed mb-4">
        Our mission is to create a platform where people can learn, grow, and
        connect with like-minded individuals. Whether you're looking for
        practical advice, expert tips, or motivational stories, you'll find it
        all here. Thank you for being a part of our journey!
      </p>
      <p className="text-lg text-gray-600 leading-relaxed">
        Stay connected and feel free to reach out to us with any questions,
        suggestions, or feedback. We value your input and look forward to
        building a strong and supportive community together.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Values
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Commitment to excellence</li>
          <li>Community and collaboration</li>
          <li>Continuous learning and growth</li>
          <li>Transparency and trust</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Have questions or feedback? Feel free to reach out via email at{" "}
          <a
            href="mailto:info@website.com"
            className="text-indigo-600 hover:underline"
          >
            info@website.com
          </a>
          . We look forward to hearing from you!
        </p>
      </div>
    </div>
  );
};

export default About;
