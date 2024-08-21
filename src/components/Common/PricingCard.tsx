interface CardProps {
    title: string;
    description: string;
    price: string;
    textColor?: string;
    background?: string;
}

const Card = ({
    title,
    description,
    price,
    textColor = "#4e5e9d",
    background = "#ffe5ca"
}: CardProps): JSX.Element => {
    return (
        <div
            className="flex justify-between items-center p-6"
            style={{
                backgroundColor: background,
                borderRadius: "50px",
                color: textColor
            }}
        >
            <div>
                <h1 className="font-title text-xl sm:text-lg drop-shadow-lg text-left font-bold">
                    {title}
                </h1>
                <p className="text-sm">{description}</p>
            </div>
            <div>
                <p className="text-2xl md:text-2xl font-bold text-right">{price}€</p>
            </div>
        </div>
    );
};

export default Card;
