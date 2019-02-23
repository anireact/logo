import { Logo } from '@anireact/logo';
import React, { useState } from 'react';
import { render } from 'react-dom';

// eslint-disable-next-line max-lines-per-function
const Demo = () => {
    const [color, setColor] = useState('black' as 'black' | 'white');
    const [shape, setShape] = useState(undefined as undefined | 'rounded' | 'circle');
    const [size, setSize] = useState(48);

    return (
        <div>
            <div>
                Color:{' '}
                <label>
                    <input
                        type={'radio'}
                        name={'color'}
                        checked={color === 'black'}
                        onChange={e => e.target.checked && setColor('black')}
                    />{' '}
                    Black
                </label>
                <label>
                    <input
                        type={'radio'}
                        name={'color'}
                        checked={color === 'white'}
                        onChange={e => e.target.checked && setColor('white')}
                    />{' '}
                    White
                </label>
            </div>

            <div>
                Shape:{' '}
                <label>
                    <input
                        type={'radio'}
                        name={'shape'}
                        checked={shape === undefined}
                        onChange={e => e.target.checked && setShape(undefined)}
                    />{' '}
                    Default
                </label>
                <label>
                    <input
                        type={'radio'}
                        name={'shape'}
                        checked={shape === 'rounded'}
                        onChange={e => e.target.checked && setShape('rounded')}
                    />{' '}
                    Rounded
                </label>
                <label>
                    <input
                        type={'radio'}
                        name={'shape'}
                        checked={shape === 'circle'}
                        onChange={e => e.target.checked && setShape('circle')}
                    />{' '}
                    Circle
                </label>
            </div>

            <div>
                Size:{' '}
                <label>
                    <input
                        type={'radio'}
                        name={'size'}
                        checked={size === 16}
                        onChange={e => e.target.checked && setSize(16)}
                    />{' '}
                    16
                </label>
                <label>
                    <input
                        type={'radio'}
                        name={'size'}
                        checked={size === 18}
                        onChange={e => e.target.checked && setSize(18)}
                    />{' '}
                    18
                </label>
                <label>
                    <input
                        type={'radio'}
                        name={'size'}
                        checked={size === 20}
                        onChange={e => e.target.checked && setSize(20)}
                    />{' '}
                    20
                </label>
                <label>
                    <input
                        type={'radio'}
                        name={'size'}
                        checked={size === 22}
                        onChange={e => e.target.checked && setSize(22)}
                    />{' '}
                    22
                </label>
                <label>
                    <input
                        type={'radio'}
                        name={'size'}
                        checked={size === 24}
                        onChange={e => e.target.checked && setSize(24)}
                    />{' '}
                    24
                </label>
                <label>
                    <input
                        type={'radio'}
                        name={'size'}
                        checked={size === 32}
                        onChange={e => e.target.checked && setSize(32)}
                    />{' '}
                    32
                </label>
                <label>
                    <input
                        type={'radio'}
                        name={'size'}
                        checked={size === 48}
                        onChange={e => e.target.checked && setSize(48)}
                    />{' '}
                    48
                </label>
                <label>
                    <input
                        type={'radio'}
                        name={'size'}
                        checked={size === 64}
                        onChange={e => e.target.checked && setSize(64)}
                    />{' '}
                    64
                </label>
                <label>
                    <input
                        type={'radio'}
                        name={'size'}
                        checked={size === 128}
                        onChange={e => e.target.checked && setSize(128)}
                    />{' '}
                    128
                </label>
                <label>
                    <input
                        type={'radio'}
                        name={'size'}
                        checked={size === 256}
                        onChange={e => e.target.checked && setSize(256)}
                    />{' '}
                    256
                </label>
                <label>
                    <input
                        type={'radio'}
                        name={'size'}
                        checked={size === 512}
                        onChange={e => e.target.checked && setSize(512)}
                    />{' '}
                    512
                </label>
            </div>

            <Logo color={color} size={size} shape={shape} />
            <style jsx>{/* language=CSS */ `
                div {
                    margin: auto;
                }
            `}</style>
            <style jsx global>{/* language=CSS */ `
                html,
                body,
                #root {
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    margin: 0;
                }

                #root {
                    display: flex;
                    background-color: ${color === 'white' ? '#fff' : '#000'};
                    color: ${color === 'white' ? '#000' : '#fff'};
                    overflow: auto;
                }
            `}</style>
        </div>
    );
};

render(<Demo />, document.querySelector('#root'));
