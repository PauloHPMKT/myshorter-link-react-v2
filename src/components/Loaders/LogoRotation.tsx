import { useStyle } from '../../hooks/useStyles';
import logoSpin from '../../assets/img/logo-spin.png';

export const LogoRotation = ({ message }: { message: string }) => {
  const classes = useStyle();

  return (
    <div className="h-screen flex justify-center items-center flex-col ">
        <div className={`${classes.animationRotation}`}>
          <img src={logoSpin} alt="Logo Spin" className="w-[80px]" />
        </div>
        <p className="text-primary mt-5 text-lg font-semibold">{message}</p>
    </div>
  )
}
