import React from 'react';

const AboutModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
        <div className="flex items-center mb-4">
          <img src="path_to_image" alt="MongoDB" className="w-8 h-8 mr-2" />
          <div>
            <h3 className="text-xl font-semibold">MongoDB</h3>
            <p className="text-gray-600">Why it's good: MongoDB is a NoSQL database that provides flexibility and scalability, making it suitable for modern applications.</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <img src="path_to_image" alt="Express.js" className="w-8 h-8 mr-2" />
          <div>
            <h3 className="text-xl font-semibold">Express.js</h3>
            <p className="text-gray-600">Why it's good: Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <img src="path_to_image" alt="React" className="w-8 h-8 mr-2" />
          <div>
            <h3 className="text-xl font-semibold">React</h3>
            <p className="text-gray-600">Why it's good: React is a JavaScript library for building user interfaces, known for its performance and reusable components, making UI development efficient.</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src="path_to_image" alt="Node.js" className="w-8 h-8 mr-2" />
          <div>
            <h3 className="text-xl font-semibold">Node.js</h3>
            <p className="text-gray-600">Why it's good: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, enabling developers to use JavaScript for server-side development, unifying the language for both client and server-side code.</p>
          </div>
        </div>
        <button onClick={onClose} className="text-black bg-gray-200 px-3 py-2 rounded-md text-xl font-medium mt-4">Close</button>
      </div>
    </div>
  );
};

export default AboutModal;

