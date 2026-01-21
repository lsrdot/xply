import React from 'react';
import { Svg, G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

export default function BadgeIcon({ size = 40 }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
    >
      <Defs>
        <ClipPath id="clip0">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
        <ClipPath id="clip1">
          <Rect
            width="23.3363"
            height="23.3363"
            fill="white"
            transform="translate(8.125 9.125)"
          />
        </ClipPath>
      </Defs>

      <G clipPath="url(#clip0)">
        <Path
          d="M19.5 3L34.6554 11.75V29.25L19.5 38L4.34456 29.25V11.75L19.5 3Z"
          fill="#18A3C2"
        />
        <G clipPath="url(#clip1)">
          <Path
            d="M19.7834 11.0697C14.4161 11.0697 10.0697 15.4258 10.0697 20.7931C10.0697 26.1605 14.4161 30.5166 19.7834 30.5166C25.1605 30.5166 29.5166 26.1605 29.5166 20.7931C29.5166 15.4258 25.1605 11.0697 19.7834 11.0697ZM23.9061 26.6272L19.7931 24.1477L15.6801 26.6272L16.7691 21.9502L13.1423 18.8095L17.9262 18.4012L19.7931 13.9867L21.66 18.3914L26.444 18.7998L22.8171 21.9405L23.9061 26.6272Z"
            fill="white"
          />
        </G>
      </G>
    </Svg>
  );
}
