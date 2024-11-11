import { Listbox, ListboxItem } from "@nextui-org/react";
import React from "react";
import { useAsyncList } from "react-stately";
type list = {
  key: number; //key is the number of the video in the list
  title: string; // video title
  id: string; //video youtube id
};
interface Pokemon {
  name: string;
}
export default function VideoList() {
  let videos = useAsyncList<Pokemon>({
    //return in type list
    async load({ signal, cursor }) {
      // If no cursor is available, then we're loading the first page.
      // Otherwise, the cursor is the next URL to load, as returned from the previous page.
      let res = await fetch(cursor || "https://pokeapi.co/api/v2/pokemon", {
        //replace with
        signal,
      });
      let json = await res.json();
      return {
        items: json.results, //returns a json of results
        cursor: json.next,
      };
    },
  });
  return (
    <Listbox
      items={videos.items}
      aria-label="dynamic list"
      onAction={(key) => console.log(key)}
      selectionMode="multiple"
      classNames={{ base: "max-w-sm", list: "max-h-[300px] overflow-auto" }}
    >
      {(item) => <ListboxItem key={item.name}>{item.name}</ListboxItem>}
    </Listbox>
  );
}
