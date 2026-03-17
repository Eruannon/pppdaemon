import React from "react";
import { X, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Location {
  address: string;
  mapUrl: string;
  postalCode: string;
}

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  locations: Location[];
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, locations }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
      className="fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-lg z-50 overflow-y-auto"
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold tracking-tight">
            Nasze lokalizacje
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Zamknij drawer"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>
        {locations.map((location, index) => (
          <div key={index} className="mb-6">
            <div className="flex items-center mb-2">
              <MapPin className="w-5 h-5 mr-2 text-blue-500" />
              <p className="font-medium">{location.address}</p>
            </div>
            <p className="font-medium">{location.postalCode}</p>
            <div className="aspect-video w-full">
              <iframe
                src={location.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Drawer;
