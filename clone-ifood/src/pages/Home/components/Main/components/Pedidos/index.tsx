const Pedidos = ({ item }: any) => (
  <section
    style={{
      width: "250px",
      margin: "40px 40px",
      border: "2px solid gray",
      borderRadius: "10px",
      boxShadow: "3px 1px 10px 2px gray",
      padding: "10px",
      color: "black",
      backgroundColor: "#F7F7F7",
      borderColor: "white",
      cursor: "pointer",
    }}
  >
    <img
      style={{ width: "100%", height: "150px", borderRadius: "10px" }}
      src={item.url_image}
      alt="pizza"
    />
    <h3 style={{ fontFamily: "cursive" }}>{item.title}</h3>
    <p style={{ margin: "10px 0" }}>{item.description}</p>
    <p style={{ margin: "10px 0" }}>{item.subtitle}</p>
    <span style={{ color: "green", fontWeight: "bold" }}>R$ {item.price}</span>
  </section>
);

export { Pedidos };
