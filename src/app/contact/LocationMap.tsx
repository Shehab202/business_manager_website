const LocationMap = () => {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3456.5726835262553!2d31.311278926098062!3d29.962967622429485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU3JzQ2LjciTiAzMcKwMTgnMzEuMyJF!5e0!3m2!1sar!2seg!4v1750768525310!5m2!1sar!2seg"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default LocationMap;
