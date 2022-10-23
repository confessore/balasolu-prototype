import React, { Component, useState } from 'react';
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon';

interface IProps {

}

interface IState {
    name: string,
    email: string,
    message: string
}

export default class Service extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""
        }
    }

    componentDidMount() {

    }

    useEffect() {

    }

    render() {
        return (
            <div className="w-full h-auto md:w-[32rem] rounded-xl justify-center items-center m-1 p-8 bg-zinc-200 dark:bg-zinc-800 bg-opacity-90">
                <div className="justify-between items-center m-1 p-1">
                    <div className="text-lg font-medium justify-center items-center m-1 p-1">
                        feel free to send us a message
                    </div>
                    <div className="flex justify-center items-center m-1 p-1">
                        <div className="m-1 p-1">
                            <div className="m-1 p-1 font-medium text-emerald-500 dark:text-emerald-400">what is your name?</div>
                            <input id="name" type="text" onChange={e => this.setState({ name: e.target.value })} />
                        </div>
                        <div className="m-1 p-1">
                            <div className="m-1 p-1 font-medium text-emerald-500 dark:text-emerald-400">what is your email?</div>
                            <input id="email" type="email" onChange={e => this.setState({ email: e.target.value })} />
                        </div>
                    </div>
                    <div className="justify-center items-center m-1 p-1">
                        <div className="m-1 p-1 font-medium text-emerald-500 dark:text-emerald-400">how may we assist you?</div>
                        <textarea className="w-full" id="message" rows={4} onChange={e => this.setState({ message: e.target.value })} />
                    </div>
                </div>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">send message</button>
                </div>
            </div>
        );
    }
}