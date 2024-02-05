import url from "../assets/Resume/Resume.pdf";

import HeaderStyle from "../styles/Home.module.css";

const Cv = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(url).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = url;
        alink.click();
      });
    });
  };
  return (
    <>
    <div className={HeaderStyle.contact__buttons} >
   <button onClick={onButtonClick} className={HeaderStyle.btn_content} >
           download cv
          </button>
          </div>
    
    </>
  );
};

export default Cv;
