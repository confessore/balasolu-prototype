import React, { useState } from 'react';

const Emailer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [disabled, setDisabled] = useState(false);

    const handleClick = async () => {
        console.log('handling button click`');
        setDisabled(true);
        await fetch('https://localhost/api/sendEmail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name, email: email, subject: 'email from contact form', description: message }),
        });
        console.log('button click handled');
    }

    return (
        <div className="w-full h-auto md:w-[32rem] rounded-xl justify-center items-center m-1 p-8 bg-zinc-200 dark:bg-zinc-800 bg-opacity-90">
            <div className="justify-between items-center m-1 p-1">
                <div className="text-lg font-medium justify-center items-center m-1 p-1">
                    feel free to send us a message
                </div>
                <div className="m-1 p-1">
                    <div className="m-1 p-1 font-medium text-emerald-500 dark:text-emerald-400">what is your name?</div>
                    <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="m-1 p-1">
                    <div className="m-1 p-1 font-medium text-emerald-500 dark:text-emerald-400">what is your email?</div>
                    <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="m-1 p-1">
                    <div className="m-1 p-1 font-medium text-emerald-500 dark:text-emerald-400">how may we assist you?</div>
                    <textarea className="w-full" id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
            </div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 disabled:hover:bg-blue-300 text-white font-bold py-2 px-4 rounded" disabled={disabled} onClick={() => handleClick()}>send message</button>
            </div>
        </div>
    );
};

export default Emailer;