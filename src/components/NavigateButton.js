const NavigateButton = ({ onNavigate, label }) => {
    return (
      <button
        class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2'
        onClick={onNavigate}
      >
        {label}
      </button>
    );
  };
  
  export default NavigateButton;