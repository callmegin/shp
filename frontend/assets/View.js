import * as React from "react";

function SvgView(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" {...props}>
      <path d="M8.775 24.477h12.914a1 1 0 001-1V10.563a1 1 0 00-1-1H8.775a1 1 0 00-1 1v12.914a1 1 0 001 1zm1-12.914h10.914v10.914H9.775V11.563zM25.861 24.477h12.914a1 1 0 001-1V10.563a1 1 0 00-1-1H25.861a1 1 0 00-1 1v12.914a1 1 0 001 1zm1-12.914h10.914v10.914H26.861V11.563zM8.775 41.563h12.914a1 1 0 001-1V27.648a1 1 0 00-1-1H8.775a1 1 0 00-1 1v12.914a1 1 0 001 1.001zm1-12.915h10.914v10.914H9.775V28.648zM24.861 40.563a1 1 0 001 1h12.914a1 1 0 001-1V27.648a1 1 0 00-1-1H25.861a1 1 0 00-1 1v12.915zm2-11.915h10.914v10.914H26.861V28.648z" />
    </svg>
  );
}

export default SvgView;