import { useState } from "react";
import { Pits } from "./components/pits/Pits"
import './App.css';
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,

} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
function App() {

  const [cards, setCards] = useState([{
    id: 1, title: "card 1", 
    users: [{useId: 1, userName: "user 1" },
     {useId: 2, userName: "user 1" }, 
     {useId: 3, userName: "user 3" }]
  }, {
    id: 2, title: "card 2",
    users: [{useId: 1, userName: "user 1" },
     {useId: 2, userName: "user 1" }, 
     {useId: 3, userName: "user 3" }]
  }, {
    id: 3, title: "card 3",
    users: [{useId: 1, userName: "user 1" },
     {useId: 2, userName: "user 1" }, 
     {useId: 3, userName: "user 3" }]
  },{
    id: 4, title: "card 4",
    users: [{useId: 1, userName: "user 1" },
     {useId: 2, userName: "user 1" }, 
     {useId: 3, userName: "user 3" }]
  }, {
    id: 5, title: "card 5",
    users: [{useId: 1, userName: "user 1" },
     {useId: 2, userName: "user 1" }, 
     {useId: 3, userName: "user 3" }]
  }, {
    id: 6, title: "card 6",
    users: [{useId: 1, userName: "user 1" },
     {useId: 2, userName: "user 1" }, 
     {useId: 3, userName: "user 3" }]
  }])

  const getCardIndex = id => cards.findIndex(card => card.id === id)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const handleDragEnd = (event) => {
    const { active, over } = event
    if (active.id === over.id) {
      return
    }

    setCards(cards => {
      const originalPosition = getCardIndex(active.id)
      const newPosition = getCardIndex(over.id)

      return arrayMove(cards, originalPosition, newPosition)
    })

  }

  return (
    <div className="App">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}>
        <Pits cards={cards} />
      </DndContext>
    </div>
  );
}

export default App;
