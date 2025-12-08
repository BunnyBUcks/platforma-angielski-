import React, { useState } from 'react';
import WordMatch from '../../games/WordMatch/WordMatch';
import FlashcardFrenzy from '../../games/FlashcardFrenzy/FlashcardFrenzy';
import SpellingBee from '../../games/SpellingBee/SpellingBee';
import WordSearch from '../../games/WordSearch/WordSearch';
import CrosswordChallenge from '../../games/CrosswordChallenge/CrosswordChallenge';
import GrammarQuest from '../../games/GrammarQuest/GrammarQuest';
import TenseMaster from '../../games/TenseMaster/TenseMaster';
import SentenceBuilder from '../../games/SentenceBuilder/SentenceBuilder';
import ArticleAdventure from '../../games/ArticleAdventure/ArticleAdventure';
import PronounPuzzle from '../../games/PronounPuzzle/PronounPuzzle';
import SoundMatch from '../../games/SoundMatch/SoundMatch';
import ListenClick from '../../games/ListenClick/ListenClick';
import DictationRace from '../../games/DictationRace/DictationRace';
import DialogueMaster from '../../games/DialogueMaster/DialogueMaster';
import PronunciationPro from '../../games/PronunciationPro/PronunciationPro';
import StoryBuilder from '../../games/StoryBuilder/StoryBuilder';
import PhraseMatch from '../../games/PhraseMatch/PhraseMatch';
import MemoryCards from '../../games/MemoryCards/MemoryCards';
import WordScramble from '../../games/WordScramble/WordScramble';
import ReadingQuiz from '../../games/ReadingQuiz/ReadingQuiz';
import VocabChallenge from '../../games/VocabChallenge/VocabChallenge';
import SpellingBeeDemo from './SpellingBeeDemo';
import GrammarQuestDemo from './GrammarQuestDemo';
import ListeningDemo from './ListeningDemo';

export default function GameDemoModal({ game, onClose }) {
  if (!game) return null;

  const renderDemo = () => {
    switch (game.id) {
      case 1: // Word Match
        return <WordMatch />;
      case 2: // Flashcard Frenzy
        return <FlashcardFrenzy />;
      case 3: // Spelling Bee
        return <SpellingBee />;
      case 4: // Word Search
        return <WordSearch />;
      case 5: // Crossword Challenge
        return <CrosswordChallenge />;
      case 6: // Grammar Quest
        return <GrammarQuest />;
      case 7: // Tense Master
        return <TenseMaster />;
      case 8: // Sentence Builder
        return <SentenceBuilder />;
      case 9: // Article Adventure
        return <ArticleAdventure />;
      case 10: // Pronoun Puzzle
        return <PronounPuzzle />;
      case 11: // Sound Match
        return <SoundMatch />;
      case 12: // Listen & Click
        return <ListenClick />;
      case 13: // Dictation Race
        return <DictationRace />;
      case 14: // Dialogue Master
        return <DialogueMaster />;
      case 15: // Pronunciation Pro
        return <PronunciationPro />;
      case 16: // Story Builder
        return <StoryBuilder />;
      case 17: // Phrase Match
        return <PhraseMatch />;
      case 18: // Memory Cards
        return <MemoryCards />;
      case 19: // Word Scramble
        return <WordScramble />;
      case 20: // Reading Quiz
        return <ReadingQuiz />;
      case 21: // Vocab Challenge
        return <VocabChallenge />;
      default:
        return (
          <div className="demo-placeholder">
            <p className="demo-icon-large">{game.icon}</p>
            <h3>Demo gry: {game.name}</h3>
            <p>Pełna wersja demo będzie dostępna wkrótce!</p>
            <p className="demo-info">{game.description}</p>
          </div>
        );
    }
  };

  return (
    <div className="game-modal-overlay" onClick={onClose}>
      <div className="game-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>✕</button>
        <div className="modal-header">
          <span className="modal-game-icon">{game.icon}</span>
          <div>
            <h2>{game.name}</h2>
            <p className="modal-subtitle">Bezpłatne demo</p>
          </div>
        </div>
        <div className="modal-body">
          {renderDemo()}
        </div>
      </div>
    </div>
  );
}
