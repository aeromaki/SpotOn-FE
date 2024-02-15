"use client";

import "./style.css";
import React, { useCallback, useState, useRef } from "react";
import axios from "axios";

const server = "http://165.132.46.86:32073";

export default function Page() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const [buttonDisplay, setButtonDisplay] = useState("none");

    const onUploadBoxClick = useCallback(() => {
        const fileInput = fileInputRef.current;
        if (fileInput && !fileInput?.disabled) {
            fileInput.click();
        }
    }, []);

    const onImgLoad = useCallback(() => {
        setButtonDisplay("");
        if (fileInputRef.current) {
            fileInputRef.current.disabled = true;
        }
    }, []);

    const onFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const img = imgRef.current;
        if (img) {
            img.src = URL.createObjectURL(file);
            img.style.display = "block";
            img.onload = onImgLoad
        }
    }, [onImgLoad]);

    const onSearchButtonClick = useCallback(() => {
        var description = searchInputRef.current?.value;
        var image = fileInputRef.current?.files?.[0];

        if (description && image) {
            let formData = new FormData();
            formData.append("description", description);
            formData.append("image", image);
            const url = server + "/imageSearch";
            axios.post(
                url, formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            ).then(res => {
                window.location.href = "/page5_result";
                console.log(res)
            }).catch(err => {
                console.error(err);
            });
        }
    }, []);

    return (
        <section className="wrapper">
            <div className="wrapper">
                <div className="upload-box" onClick={onUploadBoxClick}>
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={onFileInputChange}
                        hidden
                    />
                    <img src="/upload-icon.svg" ref={imgRef} alt="upload icon" />
                    <p>Browse File to Upload</p>

                    <div style={{ display: buttonDisplay }}>
                        <input
                            type="text"
                            id="search-input"
                            placeholder="Enter search term here"
                            style={{
                                display: "block",
                                padding: "10px 20px",
                                marginTop: "10px"
                            }}
                            ref={searchInputRef}
                        />
                        <button
                            id="search-button"
                            style={{
                                display: "inline-block",
                                padding: "10px 20px",
                                marginTop: "10px"
                            }}
                            onClick={onSearchButtonClick}
                        >Search</button>
                        <button
                            id="refresh-button"
                            style={{
                                display: "inline-block",
                                padding: "10px 20px",
                                marginTop: "10px"
                            }}
                            onClick={() => {window.location.reload();}}
                        >Refresh</button>
                    </div>
                </div>
            </div>
        </section>
    )
}