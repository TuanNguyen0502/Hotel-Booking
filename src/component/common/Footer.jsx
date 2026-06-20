const FooterComponent = () => {
  return (
    <footer>
      <span className="my-footer">
        &copy; {new Date().getFullYear()} Hotel Booking. All rights reserved.
      </span>
    </footer>
  );
};

export default FooterComponent;
