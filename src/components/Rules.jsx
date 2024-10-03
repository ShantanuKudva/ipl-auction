import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Table,
  TableBody,
  TableCell,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const rules = [
  {
    rule: "Retention Rules",
    desc: "Teams can retain a total of six players, which may include a maximum of five capped players (Indian or overseas) and up to two uncapped players. A maximum of six RTMs will be allowed for each team.",
  },
  {
    rule: "Salary Cap",
    desc: "The first retained player will cost INR 18 crores, followed by INR 14 crores for the second, and INR 11 crores for the third. If teams retain a fourth and fifth player, they will be priced at INR 18 crores and INR 14 crores, respectively. These amounts will be deducted from the team's auction purse.",
  },
  {
    rule: "Auction Purse",
    desc: "The auction purse for each team has been set at INR 120 crores for IPL 2025. The total salary cap, including auction purse, performance pay, and match fees, will increase over the next three years.",
  },
  {
    rule: "Right to Match (RTM) Rules",
    desc: "The highest bidder will be given one final opportunity to raise their bid for a player before the team holding the RTM card can exercise their right to match the bid and retain the player.",
  },
  {
    rule: "Uncapped Player Retention",
    desc: "An uncapped player can be retained for INR 4 crores. A capped Indian player becomes uncapped if they haven't played in the starting XI of international matches in the last 5 years or don’t have a Central Contract with BCCI.",
  },
  {
    rule: "Overseas Player Registration",
    desc: "Overseas players must register for the big auction. If they don’t register, they will be ineligible for the following year's auction unless there is a confirmed injury or medical condition.",
  },
];

const players = [
  {
    retainedPlayer: "Player 1",
    cost: "INR 18 Crores",
  },
  {
    retainedPlayer: "Player 2",
    cost: "INR 14 Crores",
  },
  {
    retainedPlayer: "Player 3",
    cost: "INR 11 Crores",
  },
  {
    retainedPlayer: "Player 4",
    cost: "INR 18 Crores",
  },
  {
    retainedPlayer: "Player 4",
    cost: "INR 14 Crores",
  },
];

export function PlayerTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Retained Player</TableHead>
          <TableHead>Cost</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {players.map((player) => (
          <TableRow key={player.retainedPlayer}>
            <TableCell className="font-medium">
              {player.retainedPlayer}
            </TableCell>
            <TableCell>{player.cost}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableCaption>
        The total cost of five retained players for IPL 2025 will be INR 75
        crores.
      </TableCaption>
    </Table>
  );
}

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {rules.map((ruleItem, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger>{ruleItem.rule}</AccordionTrigger>
          <AccordionContent>{ruleItem.desc}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function Rules() {
  return (
    <Sheet>
      <SheetTrigger>Rules</SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>IPL Auction Rules</SheetTitle>
          <SheetDescription>
            These are the new rules as per the latest IPL auction guidelines.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-5">
          <AccordionDemo />
        </div>
        {/* 
            <div className="mt-5">
                <PlayerTable />
            </div> */}
      </SheetContent>
    </Sheet>
  );
}

export default Rules;
