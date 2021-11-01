import { storiesOf } from "@storybook/react";
import React from "react";

import Message from "./Message";

storiesOf('site/Message', module).add('Message', () =>(
<div>
    <Message />
</div>
));