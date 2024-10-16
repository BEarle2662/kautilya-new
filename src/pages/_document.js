// src/pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Enquire Now Button */}

        <button
          type="button"
          className="npfWidget-0da0d2dd344f21c6dfe473c84bd609a0 enquire-btn-now"
        >
          Admission Enquiry
        </button>

        {/* External Script */}
        <script src="https://in8cdn.npfs.co/js/widget/npfwpopup.js"></script>

        {/* Inline Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              let npfW0da0d2dd344f21c6dfe473c84bd609a0 = new NpfWidgetsInit({
                widgetId: "0da0d2dd344f21c6dfe473c84bd609a0",
                baseurl: "widgets.in8.nopaperforms.com",
                formTitle: "Enquiry Form",
                titleColor: "#FF0033",
                backgroundColor: "#ddd",
                iframeHeight: "500px",
                buttonbgColor: "#4c79dc",
                buttonTextColor: "#FFF",
              });
            `,
          }}
        />
      </body>
    </Html>
  );
}
