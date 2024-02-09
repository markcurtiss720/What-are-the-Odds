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
        { name: 'Euroleague', query_key: 'basketball_euroleague'}
    ]},
    { name: 'Cricket', query_key: 'cricket_test_match' },
    { name: 'NHL', query_key: 'icehockey_nhl' },
    { name: 'MMA', query_key: 'mma_mixed_martial_arts' },
    { name: 'Boxing', query_key: 'boxing_boxing'},
    { name: 'NRL Rugby', query_key: 'rugbyleague_nrl' },
    { name: 'Golf', leagues: [
        { name: 'The Masters', query_key: 'golf_masters_tournament_winner'},
        { name: 'PGA Championship', query_key: 'golf_pga_championship_winner'},
        { name: 'The Open', query_key: 'golf_the_open_championship_winner'},
        { name: 'US Open', query_key: 'golf_us_open_winner'}
    ]},
    { name: 'Soccer', leagues: [
        { name: 'English Premier League', query_key: 'soccer_epl' },
        { name: 'Brazil Série A', query_key: 'soccer_brazil_campeonato' },
        { name: 'La Liga - Spain', query_key: 'soccer_spain_la_liga' },
        { name: 'Ligue 1 - France', query_key: 'soccer_france_ligue_one' },
        { name: 'Bundesliga - Germany', query_key: 'soccer_germany_bundesliga' },
        { name: 'Serie A - Italy', query_key: 'soccer_italy_serie_a' },
        { name: 'MLS', query_key: 'soccer_usa_mls' },
        { name: 'UEFA Champions League', query_key: 'soccer_uefa_champs_league'},
        { name: 'UEFA Europa League', query_key: 'soccer_uefa_europa_league'}
    ]}
];

  return (
    <Menu>
      <MenuHandler>
        <Button variant="text"> View Sports                        
        <ChevronUpIcon
            strokeWidth={2.5}
            className={`inline ml-2 mb-1 h-3.5 w-3.5 transition-transform rotate-180`}
        />
        </Button>
      </MenuHandler>
      <MenuList>
      {sports.map((sport, index) => (
        <React.Fragment key={index}>
            {!sport.leagues && (
            <MenuItem>{sport.name}</MenuItem>
            )}
            {sport.leagues && (
            <Menu
                placement="right-start"
                offset={15}
            >
                <MenuHandler className="flex items-center justify-between">
                    <MenuItem>
                        {sport.name}
                        <ChevronUpIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform rotate-90`}
                        />
                    </MenuItem>
                </MenuHandler>
                <MenuList>
                    {sport.leagues.map((league, index) => (
                    <MenuItem key={index}>{league.name}</MenuItem>
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