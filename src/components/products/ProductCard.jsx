export default function ProductCard({ url, title, desc }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "50px",
      }}
    >
      <div
        style={{
          flexDirection: "row",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "5px 5px 15px black",
        }}
      >
        <div style={{ flexDirection: "column" }}>
          <img
            src={url || "https://via.placeholder.com/300.png/09f/fff"}
            alt={" apalah"}
          />
        </div>
        <div style={{ flexDirection: "column" }}>
          <h1>{title ?? "iya ini title"}</h1>
        </div>
        <div style={{ flexDirection: "column" }}>
          <h4>{desc ?? "ini descriptions"}</h4>
        </div>
      </div>
    </div>
  );
}
