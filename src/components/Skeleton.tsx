import React from 'react'
import styled, { keyframes } from 'styled-components'

const LoadingKeyframe = keyframes`
    0% {
        transform: translate3d(0, 0, 0);
    }
    
    100% {
        transform: translate3d(50%, 0, 0);
    }
`

const SkeletonAnimation = styled.div`
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    &:after {
        content: '';
        position: absolute;
        width: 300%;
        height: 100%;
        left: -200%;
        top: 0;
        background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.4) 60%,
            rgba(255, 255, 255, 0) 63%,
            rgba(255, 255, 255, 0.4) 66%
        );
        animation-name: ${LoadingKeyframe};
        animation-duration: 1.3s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
    }
`

export const Skeleton = () => <SkeletonAnimation />
