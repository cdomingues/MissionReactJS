import copyImg from '../assets/copy.svg';
import '../styles/room-code.scss';

type RooCodeProps = {
    code: string;
}

export function RoomCode(props: RooCodeProps){
function copyRoomCodeToClipboard(){
    navigator.clipboard.writeText(props.code)
}

    return(
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} width="40px" height="40px" alt="Copy room code" />
            </div>
            <span>Sala -{props.code}</span>
        </button>
    )
}