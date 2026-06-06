import React, { useState } from 'react';

const avatars = [
    { id: 1, name: 'Avatar Male - Business', imgUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Avatar Female - Casual', imgUrl: 'https://via.placeholder.com/150' },
];

const AvatarGrid = ({ onSelectAvatar }) => {
    const [selectedAvatar, setSelectedAvatar] = useState(null);

    const handleSelect = (avatar) => {
        setSelectedAvatar(avatar.id);
        onSelectAvatar(avatar);
    };

    return (
        <div className="grid grid-cols-2 gap-4">
            {avatars.map((avatar) => (
                <div
                    key={avatar.id}
                    className={`cursor-pointer p-4 border rounded ${selectedAvatar === avatar.id ? 'border-blue-500' : ''}`}
                    onClick={() => handleSelect(avatar)}
                >
                    <img src={avatar.imgUrl} alt={avatar.name} className="w-full" />
                    <p className="text-center mt-2">{avatar.name}</p>
                </div>
            ))}
        </div>
    );
};

export default AvatarGrid;