import {
    SortableContext,
    verticalListSortingStrategy,
  } from "@dnd-kit/sortable";
  
  import {Card} from "../card/Card"
  
  import "./Pits.css"
  
  export const Pits = ({ cards }) => {

    return (
      <div className="column">
        <SortableContext items={cards} strategy={verticalListSortingStrategy}>
          {cards.map((card) => (
            <Card key={card.id} id={card.id} title={card.title} users={card.users} />
          ))}
        </SortableContext>
      </div>
    );
  };
  