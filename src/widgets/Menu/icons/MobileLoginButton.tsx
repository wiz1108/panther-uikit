import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 25 24" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4.85294 5.11111H18.9706C19.6203 5.11111 20.1471 5.60857 20.1471 6.22222V9.55556H16.4416C15.8893 9.55556 15.4416 10.0033 15.4416 10.5556V13C15.4416 13.5523 15.8893 14 16.4416 14H20.1471V17.3333C20.1471 17.947 19.6203 18.4444 18.9706 18.4444H4.85294C4.20319 18.4444 3.67647 17.947 3.67647 17.3333V6.22222C3.67647 5.60857 4.20319 5.11111 4.85294 5.11111ZM21.3235 14V17.3333C21.3235 18.5606 20.2701 19.5556 18.9706 19.5556H4.85294C3.55345 19.5556 2.5 18.5606 2.5 17.3333V6.22222C2.5 4.99492 3.55345 4 4.85294 4H18.9706C20.2701 4 21.3235 4.99492 21.3235 6.22222V9.55556H21.5004C22.0527 9.55556 22.5004 10.0033 22.5004 10.5556V13C22.5004 13.5523 22.0527 14 21.5004 14H21.3235ZM18.971 11.7777C18.971 12.3913 18.4443 12.8888 17.7945 12.8888C17.1448 12.8888 16.6181 12.3913 16.6181 11.7777C16.6181 11.164 17.1448 10.6666 17.7945 10.6666C18.4443 10.6666 18.971 11.164 18.971 11.7777Z" fill="#FCFCFC"/>
    </Svg>
  );
};

export default Icon;