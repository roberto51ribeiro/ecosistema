
import React, { useState, useCallback } from 'react';
import AppIcon from './components/AppIcon';
import InfoModal from './components/InfoModal';
import EditIcon from './components/icons/EditIcon';
import MagicIcon from './components/icons/MagicIcon';
import InfoIcon from './components/icons/InfoIcon';
import ShareIcon from './components/icons/ShareIcon';

const BackgroundImage: React.FC<{ src: string; position: string }> = ({ src, position }) => (
    <div className={`absolute ${position} w-48 h-64 md:w-64 md:h-96 rounded-2xl overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-500`}>
        <img src={src} alt="Food photography" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
    </div>
);

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = useCallback(() => setIsModalOpen(true), []);
    const handleCloseModal = useCallback(() => setIsModalOpen(false), []);

    const handleShare = async () => {
        const shareData = {
            title: 'Foto Food Ecosistema',
            text: 'Conheça o ecossistema completo para suas fotos de alimentos!',
            url: window.location.href,
        };
        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                alert('A função de compartilhamento não é suportada neste navegador.');
            }
        } catch (error) {
            console.error('Erro ao compartilhar:', error);
        }
    };

    return (
        <div className="relative min-h-screen w-full bg-gray-900 text-white flex flex-col items-center justify-center p-4 overflow-hidden group">
            <BackgroundImage src="https://picsum.photos/id/1060/400/600" position="top-10 left-10 -rotate-12" />
            <BackgroundImage src="https://picsum.photos/id/312/400/600" position="bottom-20 right-5 rotate-15" />
            <BackgroundImage src="https://picsum.photos/id/1080/400/600" position="bottom-10 left-5 rotate-6" />
            <BackgroundImage src="https://picsum.photos/id/431/400/600" position="top-20 right-10 -rotate-6" />
            
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

            <main className="z-10 flex flex-col items-center text-center">
                <div className="mb-4">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-400 to-purple-500">
                        Foto Food
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300">Ecosistema</p>
                </div>
                <p className="max-w-xl mb-12 text-gray-400">
                    Suas ferramentas essenciais para transformar fotos de alimentos em obras de arte. Edite, aprimore com IA e compartilhe com facilidade.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
                    <AppIcon 
                        icon={<MagicIcon />} 
                        label="Melhoria com IA"
                        href="https://foto-food-11-425098700389.us-west1.run.app/"
                        isExternal
                    />
                    <AppIcon 
                        icon={<EditIcon />} 
                        label="Editor de Imagens"
                        href="https://foto-food-editor-2-425098700389.us-west1.run.app/"
                        isExternal
                    />
                    <AppIcon 
                        icon={<InfoIcon />} 
                        label="Adicionar Informação"
                        onClick={handleOpenModal}
                    />
                </div>
            </main>

            <button
                onClick={handleShare}
                className="z-10 absolute bottom-6 right-6 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-gray-200 hover:bg-white/20 transition-colors"
            >
                <ShareIcon />
                Compartilhar
            </button>
            
            <InfoModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default App;
