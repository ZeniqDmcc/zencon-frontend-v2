import React from "react";
import {QRCodeSVG} from "qrcode.react";

export default function AppQrCode(props) {
    const {title, description, uri, disabled = false} = props;

    return (
        !disabled && (
            <div
                style={{
                    margin: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "center"

                }}
            >
                <div className="bg-gradient-to-bl p-[1px] from-[#87FF4F] via-[#87FF4F] to-[#87FF4F]">
                    <div
                        className="md:w-[320px] sm:w-[300px] bg-[white] w-full text-center flex flex-col justify-between doc-card-shadow p-8">
                        <p className="mb-3 mt-3 font-bold text-black">{title}</p>
                        <div className="justify-center flex">
                            <a href={uri}><QRCodeSVG value={uri} size={180}/></a>
                        </div>
                        <p className="text-sm mb-3 mt-3 text-black">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        )
    );
}
