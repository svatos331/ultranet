import styled from 'styled-components'

export const WrapperLinear = styled.div`
  @keyframes flex-outer {
    from {
      max-width: 100%;
    }

    to {
      max-width: 20%;
    }
  }
  flex: 1;
  height: 100%;
  box-shadow: inset -2px -2px 6px rgb(255 255 255 / 5%),
    inset 2px 2px 6px rgb(0 0 0 / 50%);
  border-radius: 0 30px 30px 0;
  animation: 1s linear infinite alternate flex-outer;
  background-color: #151728;
`
export const WrapperCircle = styled.div`
  @keyframes circle-outer {
    from {
      background-color: darkblue;
    }

    to {
      background-color: aqua;
    }
  }
  flex: 1;
  box-shadow: inset -2px -2px 6px rgb(255 255 255 / 5%),
    inset 2px 2px 6px rgb(0 0 0 / 50%);
  border-radius: 10px;
  height: 100%;
  animation: 1s linear infinite alternate circle-outer;
`

export const WrapperImage = styled.div`
  @keyframes spin-reverse {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(-360deg);
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
  transition: all 0.3s ease-out;
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #16a085;
  animation: spin 1.7s linear infinite;
  z-index: 11;
  &::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #e74c3c;
    animation: spin-reverse 0.6s linear infinite;
  }
  &::after {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #f9c922;
    animation: spin 1s linear infinite;
  }
`
