import { useEffect, useState } from "react";

const mockGifts = [
  {
    id: "nft001",
    name: "Golden Dragon",
    image: "https://via.placeholder.com/200",
    price: 25,
    currency: "TON",
  },
  {
    id: "nft002",
    name: "Pixel Kitty",
    image: "https://via.placeholder.com/200",
    price: 10,
    currency: "Stars",
  },
];

export default function App() {
  const [gifts, setGifts] = useState<any[]>([]);
  const tg = (window as any).Telegram?.WebApp;

  useEffect(() => {
    if (tg) tg.ready();
    setTimeout(() => setGifts(mockGifts), 1000);
  }, []);

  const handleBuy = (giftId: string) => {
    alert(`Покупка подарка ${giftId} (заглушка)`);
  };

  return (
    <div style={{ background: "black", color: "white", minHeight: "100vh", padding: 20 }}>
      <h1 style={{ textAlign: "center" }}>🎁 GiftySwap Витрина</h1>
      {gifts.length === 0 ? (
        <p>Загрузка...</p>
      ) : (
        <div>
          {gifts.map((gift) => (
            <div key={gift.id} style={{ border: "1px solid #333", padding: 10, margin: "20px 0" }}>
              <img src={gift.image} alt={gift.name} style={{ width: "100%" }} />
              <h2>{gift.name}</h2>
              <p>Цена: {gift.price} {gift.currency}</p>
              <button onClick={() => handleBuy(gift.id)} style={{ width: "100%", padding: 10, marginTop: 10 }}>Купить</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}