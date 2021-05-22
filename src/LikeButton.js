import {Button} from "@vkontakte/vkui";
import React from "react";
import {Icon28LikeCircleFillRed} from "@vkontakte/icons";

export class LikeButton extends React.Component {
    state = {
        likes: 0
    };

    addLike = () => {
        let newCount = this.state.likes + 1;
        this.setState({
            likes: newCount
        });


    };

    render() {
        return (
            <Button size="s" mode="destructive" before={<Icon28LikeCircleFillRed fill="var(--white)"/>}>Понравилось</Button>
        );
    }
}