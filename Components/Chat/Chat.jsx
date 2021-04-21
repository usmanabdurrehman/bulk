import React, { useState, useEffect, useRef } from "react";
import styles from "./Chat.module.css";

export default function Chat() {
	let [messages, setMessages] = useState(localStorage.getItem("messages") ? JSON.parse(localStorage.getItem("messages")) : [
		{
			content: "Hi there, how can I help you?",
			sender: "own",
		},
	]);

	const firstUpdate = useRef(true);
	const messagesContainer = useRef(null);

	let [message, setMessage] = useState("");
	let [submitMessage, setSubmitMessage] = useState(false);

	let appendMessage = (e) => {
		e.preventDefault();
		if (message) {
			setMessages([...messages, { content: message, sender: "user" }]);
			setMessage("");
			setSubmitMessage(!submitMessage);
		}
	};

	useEffect(() => {
		if (firstUpdate.current) {
			firstUpdate.current = false;
			return;
		}
		setMessages([
			...messages,
			{
				content: replyMessage(messages[messages.length - 1].content),
				sender: "own",
			},
		]);
	}, [submitMessage]);

	useEffect(() => {
		messagesContainer.current.scrollTo({
			left: 0,
			top: messagesContainer.current.scrollHeight,
			behavior: "smooth",
		});

		return () => {
			localStorage.setItem("messages",JSON.stringify(messages))
		}
	}, [messages]);

	let isStringWordPresentInSaidArr = (message, array) => {
		let status = false;
		message = message.toLowerCase();
		array.forEach((keyword) => {
			if (message.includes(keyword.toLowerCase())) {
				status = true;
			}
		});
		return status;
	};

	let replyMessage = (message) => {
		const SALE = ["sale", "discount", "off"];
		const CONTACT = [
			"contact",
			"phone",
			"email",
			"mail",
			"phone number",
			"number",
			"query",
			"complaint",
			"fraud",
			"scam",
		];
		let messageBody;
		if (isStringWordPresentInSaidArr(message, SALE)) {
			return "Hi, Thank you for contacting us. You can check out information for our yearly sales at this page";
		} else if (isStringWordPresentInSaidArr(message, CONTACT)) {
			return "Hi, You can contact us at the email: abc@meow.com and this phone number 0900-78601";
		} else {
			return "Hi, Sorry but we could not get you. Can you try rephrasing your message?";
		}
	};

	return (
		<div className={styles.chat}>
			<div className={styles.chatHeader}>BulkBays</div>
			<div className={styles.chatMessages} ref={messagesContainer}>
				{messages.map(({ content, sender }) => (
					<div
						className={`${styles.chatMessage} ${
							sender == "own"
								? styles.ownMessage
								: styles.notOwnMessage
						}`}
					>
						{content}
					</div>
				))}
			</div>
			<div className={styles.chatTextField}>
				<form onSubmit={appendMessage}>
					<input
						type="text"
						placeholder="Write here...."
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</form>
			</div>
		</div>
	);
}
