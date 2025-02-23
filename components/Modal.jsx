import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ onClose, children }) => {
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <motion.div
          className="relative bg-white rounded-lg shadow-lg w-full max-w-2xl p-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={onClose}
            aria-label="Close Modal"
          >
            ✖
          </button>

          {/* Modal Content */}
          <div>{children}</div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Modal;
