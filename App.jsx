import { useState, useEffect, useRef } from 'react';
import './App.css';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup
} from 'firebase/auth';
import {
  getFirestore,
  onSnapshot,
  collection,
  addDoc,
  orderBy,
  query,
  serverTimestamp
} from 'firebase/firestore';
import { auth, app } from '../firebase';

const db = getFirestore(app);

function App() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null); // Create a reference to scroll to

  useEffect(() => {
    const messagesQuery = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
      })));
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    // Scroll to the bottom when the messages update
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // Trigger this effect when messages change

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });
    return unsubscribe;
  }, []);

  const sendMessage = async () => {
    if (newMessage.trim() === "") return;
    await addDoc(collection(db, "messages"), {
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName,
      text: newMessage,
      timestamp: serverTimestamp()
    });
    setNewMessage("");
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  return (
    <div className="app-container">
      {user ? (
        <div className="chat-wrapper">
          <div className="user-info">
            Logged in as .<span className="user-name">{user.displayName}</span>
          </div>

          <div className="message-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="input-box"
            />
            <button onClick={sendMessage} className="send-button">
              Send Message
            </button>
          </div>

          <button onClick={() => auth.signOut()} className="logout-button">
            Logout
          </button>

          <div className="messages-container">
            {messages.map((msg) => (
              <div key={msg.id} className="message-item">
                <img
                  src={msg.data.photoURL}
                  alt={`${msg.data.displayName}'s profile`}
                  className="message-avatar"
                />
                <div className="message-content">
                  <span className="message-author">{msg.data.displayName}</span>
                  <p className="message-text">{msg.data.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} /> {/* This will be the target for scrolling */}
          </div>
        </div>
      ) : (
        <button onClick={handleGoogleLogin} className="login-button">
          Login with Google
        </button>
      )}
    </div>
  );
}

export default App;
