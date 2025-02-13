import React, { useState } from "react";
import { TonConnectButton, useTonConnectUI } from "@tonconnect/ui-react";

const TonWallet = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [tonConnectUI] = useTonConnectUI();

  // Функция для открытия Ton Space и получения адреса
  const connectWallet = async () => {
    try {
      const wallets = await tonConnectUI.openModal(); // Запрос подключения кошелька
      if (wallets?.account?.address) {
        setWalletAddress(wallets.account.address); // Установка адреса в состояние
      }
    } catch (error) {
      console.error("Ошибка подключения:", error);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      {walletAddress && (
        <p className="mb-4 text-lg font-semibold">
          Ваш кошелек: {walletAddress}
        </p>
      )}
      <TonConnectButton />
      <button
        onClick={connectWallet}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Подключить кошелек
      </button>
    </div>
  );
};

export default TonWallet;
