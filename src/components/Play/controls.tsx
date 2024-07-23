import React from 'react';
import Check from '../../assets/svg/check-white.svg';
import Pass from '../../assets/svg/pass-white.svg';
import { useTypedSelector } from '../../redux/store';
import {
    ButtonIcon,
    ButtonInner,
    ButtonText,
    CustomButton,
    CustomButtonProp,
} from '../General/Button';
import { ButtonVariant } from '../General/Button/variants';
import { PlayExtraButton, PlayExtraButtonFlex } from './style';

interface PlayControlButtonProp extends CustomButtonProp {
  icon?: any;
  disabled?: boolean;
}

const PlayControlButton = ({
  text,
  disabled = false,
  icon = Check,
  ...props
}: PlayControlButtonProp) => {
  const Icon = icon;
  return (
    <CustomButton disabled={disabled} {...props}>
      <ButtonInner>
        <ButtonIcon>
          <Icon />
        </ButtonIcon>
        <ButtonText color="#fff">{text}</ButtonText>
      </ButtonInner>
    </CustomButton>
  );
};

interface PlayControls {
  onPass: () => void;
  onDouble: () => void;
  usedBoosts: {
    usedPass: boolean;
    usedDouble: boolean;
  };
}

const PlayControls = ({onPass, onDouble, usedBoosts}: PlayControls) => {
  const credits = useTypedSelector(state => state.profile.credit);

  const hasPass = credits.pass >= 1;
  const hasDouble = credits.double >= 1;

  const canUsePass = hasPass && usedBoosts.usedPass === false;
  const canUseDouble = hasDouble && usedBoosts.usedDouble === false;

  return (
    <PlayExtraButtonFlex>
      <PlayExtraButton>
        <PlayControlButton
          disabled={!canUseDouble}
          variant={ButtonVariant.blue}
          text="Double"
          onPress={onDouble}
        />
      </PlayExtraButton>
      <PlayExtraButton>
        <PlayControlButton
          disabled={!canUsePass}
          icon={Pass}
          variant={ButtonVariant.brown}
          text="Pass"
          onPress={onPass}
        />
      </PlayExtraButton>
    </PlayExtraButtonFlex>
  );
};

export default PlayControls;
