import React, { useState, useEffect } from "react";

const IMAGES = [
    { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80&auto=format&fit=crop", alt: "Mountains" },
    { src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&q=80&auto=format&fit=crop", alt: "Road" },
    { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop", alt: "Forest" },
    { src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80&auto=format&fit=crop", alt: "City" },
    { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop", alt: "Beach" },
    { src: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1200&q=80&auto=format&fit=crop", alt: "Desert" },
];

export default function ImagesPage() {
    const [index, setIndex] = useState(-1);

    useEffect(() => {
        function onKey(e) {
            if (index === -1) return;
            if (e.key === "Escape") setIndex(-1);
            if (e.key === "ArrowRight") setIndex((i) => Math.min(i + 1, IMAGES.length - 1));
            if (e.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [index]);

    return (
        <div style={styles.page}>
            <h1 style={styles.title}>Image Gallery</h1>

            <div style={styles.grid}>
                {IMAGES.map((img, i) => (
                    <button
                        key={img.src}
                        onClick={() => setIndex(i)}
                        style={styles.card}
                        aria-label={`Open ${img.alt}`}
                    >
                        <img src={img.src} alt={img.alt} loading="lazy" style={styles.img} />
                    </button>
                ))}
            </div>

            {index >= 0 && (
                <div style={styles.modalBackdrop} onClick={() => setIndex(-1)}>
                    <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
                            disabled={index === 0}
                            style={{ ...styles.navButton, left: 8 }}
                            aria-label="Previous"
                        >
                            ‹
                        </button>

                        <img src={IMAGES[index].src} alt={IMAGES[index].alt} style={styles.modalImg} />

                        <button
                            onClick={() => setIndex((i) => Math.min(i + 1, IMAGES.length - 1))}
                            disabled={index === IMAGES.length - 1}
                            style={{ ...styles.navButton, right: 8 }}
                            aria-label="Next"
                        >
                            ›
                        </button>

                        <button onClick={() => setIndex(-1)} style={styles.closeButton} aria-label="Close">
                            ✕
                        </button>

                        <div style={styles.caption}>{IMAGES[index].alt}</div>
                    </div>
                </div>
            )}
        </div>
    );
}

const styles = {
    page: {
        padding: 24,
        fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        color: "#111",
        minHeight: "100vh",
        background: "#fafafa",
    },
    title: { margin: "0 0 16px", fontSize: 24 },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        gap: 12,
    },
    card: {
        padding: 0,
        border: "none",
        background: "white",
        borderRadius: 8,
        overflow: "hidden",
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        cursor: "pointer",
    },
    img: { width: "100%", height: 140, objectFit: "cover", display: "block" },
    modalBackdrop: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: 20,
    },
    modal: {
        position: "relative",
        maxWidth: "90%",
        maxHeight: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
    },
    modalImg: {
        maxWidth: "100%",
        maxHeight: "80vh",
        borderRadius: 8,
        boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
    },
    navButton: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        background: "rgba(255,255,255,0.85)",
        border: "none",
        padding: "6px 10px",
        fontSize: 28,
        borderRadius: 6,
        cursor: "pointer",
    },
    closeButton: {
        position: "absolute",
        top: 8,
        right: 8,
        background: "rgba(255,255,255,0.9)",
        border: "none",
        padding: "6px 8px",
        fontSize: 16,
        borderRadius: 6,
        cursor: "pointer",
    },
    caption: {
        position: "absolute",
        bottom: -36,
        left: "50%",
        transform: "translateX(-50%)",
        color: "#fff",
        background: "rgba(0,0,0,0.6)",
        padding: "6px 10px",
        borderRadius: 6,
        fontSize: 14,
    },
};