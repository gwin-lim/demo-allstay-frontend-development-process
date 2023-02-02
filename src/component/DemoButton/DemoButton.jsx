import React from 'react';
import PropTypes from 'prop-types';


const baseTypogarphyStyle = 'text-lg text-white-100';
const baseGraphicStyle = 'flex justify-center px-10 py-3 rounded-full bg-blue-500';
const pressedGraphicStyle = 'active:bg-blue-300';
const focusedGraphicStyle = 'focus:outline-none focus:ring focus:ring-blue-900-50';
const hoverGraphicStyle = 'hover:drop-shadow-elevated';
const disabledStyle = 'disabled:bg-gray-500 disabled:text-gray-300 disabled:filter-none';
const loadingStyle = 'max-w-13 max-h-13 w-13 h-13 px-0 py-0';

function DemoButton({
  isLoading=false,
  disabled=false,
  children,
}) {

  return (
    <button
      isLoading={isLoading}
      disabled={disabled || isLoading}
      className={`
        ${baseTypogarphyStyle}
        ${baseGraphicStyle}
        ${pressedGraphicStyle}
        ${focusedGraphicStyle}
        ${hoverGraphicStyle}
        ${disabledStyle}
        ${isLoading ? loadingStyle : ''}
      `}
    >
      {isLoading ? '...' : children}
    </button>
  );
};

export default DemoButton;

DemoButton.propTypes = {
  /**
   * 버튼 클릭 후 동기적으로 어떤 결과를 기다려야하는 상황을 나타냅니다.
   */
  isLoading: PropTypes.bool,
  /**
   * 버튼의 비활성 상태를 나타냅니다.
   */
  disabled: PropTypes.bool,
  /**
   * 버튼 캡션입니다.
   */
  children: PropTypes.string.isRequired,
};

DemoButton.defaultProps = {
  disabled: false,
  isLoading: false,
  children: 'Button Caption',
};
