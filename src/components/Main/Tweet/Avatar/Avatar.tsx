import { Link } from 'react-router-dom';
import { AvatarStyled, AvatarBox } from './Avatar.styled';

export interface IAvtarProps {
  avatar: string;
  name: string;
  nicName: string;
}

const Avatar = ({ avatar, name, nicName }: IAvtarProps) => {
  return (
    <AvatarBox>
      <AvatarStyled>
        <Link to={`/${nicName}`}>
          <picture>
            <img src={avatar} alt={name} />
          </picture>
        </Link>
      </AvatarStyled>
    </AvatarBox>
  );
};
export default Avatar;
