import React from "react";
import {  ChevronUpIcon } from "@heroicons/react/24/solid";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
 
export default function SportsMenu() {
  const [openMenu, setOpenMenu] = React.useState(false);

  const sports = [
    { name: 'NCAA Football', query_key: 'americanfootball_ncaaf' },
    { name: 'NFL', query_key: 'americanfootball_nfl' },
    { name: 'Aussie Football (AFL)', query_key: 'aussierules_afl' },
    { name: 'MLB', query_key: 'baseball_mlb'},
    { name: 'NBA', query_key: 'basketball_nba' },
    { name: 'Cricket', query_key: 'cricket_test_match' },
    { name: 'NHL', query_key: 'icehockey_nhl' },
    { name: 'MMA', query_key: 'mma_mixed_martial_arts' },
    { name: 'NRL Rugby', query_key: 'rugbyleague_nrl' },
    { name: 'Soccer', leagues: [
        { name: 'English Premier League', query_key: 'soccer_epl' },
        { name: 'Brazil Série A', query_key: 'soccer_brazil_campeonato' },
        { name: 'La Liga - Spain', query_key: 'soccer_spain_la_liga' },
        { name: 'Ligue 1 - France', query_key: 'soccer_france_ligue_one' },
        { name: 'J League', query_key: 'soccer_japan_j_league' },
        { name: 'League of Ireland', query_key: 'soccer_league_of_ireland' },
        { name: 'Eliteserien - Norway', query_key: 'soccer_norway_eliteserien' },
        { name: ''}
    ]}
]
 
  return (
    <Menu>
      <MenuHandler>
        <Button> Menu</Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <Menu
          placement="right-start"
          open={openMenu}
          handler={setOpenMenu}
          allowHover
          offset={15}
        >
          <MenuHandler className="flex items-center justify-between">
            <MenuItem>
              Nested Item
              <ChevronUpIcon
                strokeWidth={2.5}
                className={`h-3.5 w-3.5 transition-transform ${
                  openMenu ? "rotate-90" : ""
                }`}
              />
            </MenuItem>
          </MenuHandler>
          <MenuList>
            <MenuItem>Nested Item 1</MenuItem>
            <MenuItem>Nested Item 2</MenuItem>
            <MenuItem>Nested Item 3</MenuItem>
          </MenuList>
        </Menu>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
}