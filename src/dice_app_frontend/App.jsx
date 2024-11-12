// App.jsx
import React, { useState, useEffect } from 'react';
import Web3 from 'web3'; // Ensure Web3 is properly imported
import './index.scss'; // Your main SCSS file

const App = ({ backendCanisterId }) => {
  const [account, setAccount] = useState('');
  const [diceValue, setDiceValue] = useState('🎲');
  const [isRolling, setIsRolling] = useState(false);
  const [web3, setWeb3] = useState(null);

  // Initialize Web3
  useEffect(() => {
    const initWeb3 = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await web3Instance.eth.getAccounts();
          setAccount(accounts[0]);
          console.log('Connected account:', accounts[0]);
        } catch (error) {
          console.error('User denied account access', error);
        }
      } else {
        console.log('Non-Ethereum browser detected. Please consider using MetaMask!');
      }
    };

    initWeb3();
  }, []);

  // Fetch data from backend canister
  useEffect(() => {
    const fetchDiceValue = async () => {
      try {
        console.log("Backend canister ID:", backendCanisterId);
        // Here, you can use an agent to call the backend canister's `roll_dice` method.
        // Replace `someAgent` with your actual agent setup.
        // Example: const result = await someAgent.callCanister(backendCanisterId, 'roll_dice');
        // console.log("Roll dice result:", result);
      } catch (error) {
        console.error("Error calling backend canister:", error);
      }
    };

    fetchDiceValue();
  }, [backendCanisterId]);

  const handleRoll = () => {
    setIsRolling(true);
    setTimeout(() => {
      const result = Math.floor(Math.random() * 6) + 1;
      setDiceValue(`🎲 ${result}`);
      setIsRolling(false);
    }, 500);
  };

  return (
    <div className="dice-container">
      <h1>Animated Dice Roller</h1>
      {account ? (
        <p>Connected account: {account}</p>
      ) : (
        <p>No accounts connected</p>
      )}
      <p>Backend Canister ID: {backendCanisterId}</p> {/* Display backend canister ID for debugging */}
      <div className={`dice ${isRolling ? 'rolling' : ''}`}>{diceValue}</div>
      <button onClick={handleRoll} disabled={isRolling}>
        Roll Dice
      </button>
    </div>
  );
};

export default App;















