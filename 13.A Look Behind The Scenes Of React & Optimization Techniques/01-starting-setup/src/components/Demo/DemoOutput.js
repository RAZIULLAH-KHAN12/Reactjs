import React, { Fragment } from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
    console.log('DemoOutput RUNNING');
    return (
        <Fragment>
            <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>
        </Fragment>
    );
}

export default React.memo(DemoOutput);