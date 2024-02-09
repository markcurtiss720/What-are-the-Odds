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
  const [openMenus, setOpenMenus] = React.useState({});

  const sports = [
    { name: 'Football', leagues: [
        { name: 'NCAA Football', query_key: 'americanfootball_ncaaf' },
        { name: 'NFL', query_key: 'americanfootball_nfl' },
        { name: 'Aussie Football (AFL)', query_key: 'aussierules_afl' },
    ]},
    { name: 'MLB', query_key: 'baseball_mlb'},
    { name: 'Basketball', leagues: [
        { name: 'NBA', query_key: 'basketball_nba' },
        { name: 'NCAA Basketball', query_key: 'basketball_ncaab' },
    ]},
    { name: 'Cricket', query_key: 'cricket_test_match' },
    { name: 'NHL', query_key: 'icehockey_nhl' },
    { name: 'MMA', query_key: 'mma_mixed_martial_arts' },
    { name: 'NRL Rugby', query_key: 'rugbyleague_nrl' },
    { name: 'Soccer', leagues: [
        { name: 'English Premier League', query_key: 'soccer_epl' },
        { name: 'Brazil Série A', query_key: 'soccer_brazil_campeonato' },
        { name: 'La Liga - Spain', query_key: 'soccer_spain_la_liga' },
        { name: 'Ligue 1 - France', query_key: 'soccer_france_ligue_one' },
        { name: 'Bundesliga - Germany', query_key: 'soccer_germany_bundesliga' },
        { name: 'Serie A - Italy', query_key: 'soccer_italy_serie_a' },
        { name: 'MLS', query_key: 'soccer_usa_mls' }
    ]}
];

const handleMenuToggle = (index) => {
    setOpenMenus(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

 
  return (
    <Menu>
      <MenuHandler>
        <Button>Menu</Button>
      </MenuHandler>
      <MenuList>
        {sports.map((sport, index) => (
          <React.Fragment key={index} className=''>
            <MenuItem onClick={() => handleMenuToggle(index)}>
              {sport.name}
              {sport.leagues && (
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    openMenus[index] ? "rotate-90" : ""
                  }`}
                />
              )}
            </MenuItem>
            {sport.leagues && openMenus[index] && (
              <Menu
                placement="right-start"
                open={openMenus[index]}
                handler={() => handleMenuToggle(index)}
                allowHover
                offset={15}
              >
                <MenuList>
                  {sport.leagues.map((league, leagueIndex) => (
                    <MenuItem key={leagueIndex}>{league.name}</MenuItem>
                  ))}
                </MenuList>
              </Menu>
            )}
          </React.Fragment>
        ))}
      </MenuList>
    </Menu>
  );
}