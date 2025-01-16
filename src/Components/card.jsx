import { S1 } from "../assets/songs";
const Card = ({ image, title, subtitle }) => {
    return (
        <div className="bg-gray-900 w-[300px] rounded-lg overflow-hidden shadow-lg">
            <img src={image} alt={title} className="w-full h-[250px] object-cover" />
            <div className="p-4">
                <h3 className="text-white text-lg font-bold truncate">{title}</h3>
                <p className="text-gray-400 text-sm">{subtitle}</p>
                <audio src={S1}></audio>
            </div>
        </div>
    );
};
export default Card;