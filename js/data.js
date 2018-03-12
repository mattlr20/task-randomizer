var tableHistory = [{
    "week_of": "08\/07\/2017",
    "dtc": "bob.dillon",
    "capital_changes": "max.payne",
    "pull_dvd": "stevie.nix",
    "date_roll": "brad.pitt",
    "pricing_reports": "alicia.keys",
    "eod_processes": "jennifer.lawrence",
    "nasdaq": "ray.charles",
    "dvd_split_compare": "alicia.keys",
    "pricing_processes": "john.mayer"
}, {
    "week_of": "08\/14\/2017",
    "dtc": "stevie.nix",
    "capital_changes": "ray.charles",
    "pull_dvd": "jennifer.lawrence",
    "date_roll": "charmain.harvey",
    "pricing_reports": "jamie.curtis",
    "eod_processes": "bob.dillon",
    "nasdaq": "john.mayer",
    "dvd_split_compare": "jamie.curtis",
    "pricing_processes": "max.payne"
}, {
    "week_of": "08\/21\/2017",
    "dtc": "brad.pitt",
    "capital_changes": "bob.dillon",
    "pull_dvd": "max.payne",
    "date_roll": "john.mayer",
    "pricing_reports": "ray.charles",
    "eod_processes": "charmain.harvey",
    "nasdaq": "peter.dinklage",
    "dvd_split_compare": "ray.charles",
    "pricing_processes": "jennifer.lawrence"
}, {
    "week_of": "08\/28\/2017",
    "dtc": "bob.dillon",
    "capital_changes": "ray.charles",
    "pull_dvd": "max.payne",
    "date_roll": "brad.pitt",
    "pricing_reports": "alicia.keys",
    "eod_processes": "peter.dinklage",
    "nasdaq": "john.mayer",
    "dvd_split_compare": "alicia.keys",
    "pricing_processes": "charmain.harvey"
}, {
    "week_of": "09\/04\/2017",
    "dtc": "john.mayer",
    "capital_changes": "bob.dillon",
    "pull_dvd": "brad.pitt",
    "date_roll": "ray.charles",
    "pricing_reports": "jamie.curtis",
    "eod_processes": "charmain.harvey",
    "nasdaq": "peter.dinklage",
    "dvd_split_compare": "jamie.curtis",
    "pricing_processes": "ray.charles"
}, {
    "week_of": "09\/11\/2017",
    "dtc": "stevie.nix",
    "capital_changes": "brad.pitt",
    "pull_dvd": "peter.dinklage",
    "date_roll": "bob.dillon",
    "pricing_reports": "ray.charles",
    "eod_processes": "max.payne",
    "nasdaq": "jennifer.lawrence",
    "dvd_split_compare": "ray.charles",
    "pricing_processes": "john.mayer"
}];
var allAssigns = {
    "split": ["alicia.keys", "jamie.curtis", "ray.charles", "alicia.keys", "jamie.curtis", "ray.charles"],
    "prp": ["alicia.keys", "jamie.curtis", "ray.charles", "alicia.keys", "jamie.curtis", "ray.charles"],
    "dtc": ["bob.dillon", "stevie.nix", "brad.pitt", "bob.dillon", "john.mayer", "stevie.nix"],
    "cap": ["max.payne", "ray.charles", "bob.dillon", "ray.charles", "bob.dillon", "brad.pitt"],
    "pul": ["stevie.nix", "jennifer.lawrence", "max.payne", "max.payne", "brad.pitt", "peter.dinklage"],
    "eod": ["jennifer.lawrence", "bob.dillon", "charmain.harvey", "peter.dinklage", "charmain.harvey", "max.payne"],
    "nas": ["ray.charles", "john.mayer", "peter.dinklage", "john.mayer", "peter.dinklage", "jennifer.lawrence"],
    "ppc": ["john.mayer", "max.payne", "jennifer.lawrence", "charmain.harvey", "ray.charles", "john.mayer"],
    "drol": ["brad.pitt", "charmain.harvey", "john.mayer", "brad.pitt", "ray.charles", "bob.dillon"]
};
var allPools = {
    "DVD\/Split Compare Report": ["ray.charles", "jamie.curtis", "alicia.keys"],
    "Pricing Reports": ["ray.charles", "jamie.curtis", "alicia.keys"],
    "DTCs": ["ray.charles", "brad.pitt", "stevie.nix", "peter.dinklage", "bob.dillon", "jennifer.lawrence", "max.payne", "john.mayer"],
    "Capital Changes": ["ray.charles", "brad.pitt", "stevie.nix", "peter.dinklage", "bob.dillon", "jennifer.lawrence", "max.payne", "john.mayer"],
    "Pull DVDs from FA database": ["ray.charles", "brad.pitt", "stevie.nix", "peter.dinklage", "bob.dillon", "jennifer.lawrence", "max.payne", "john.mayer"],
    "EOD Processes": ["ray.charles", "brad.pitt", "stevie.nix", "peter.dinklage", "bob.dillon", "jennifer.lawrence", "max.payne", "john.mayer"],
    "NASDAQ": ["ray.charles", "brad.pitt", "stevie.nix", "peter.dinklage", "bob.dillon", "jennifer.lawrence", "max.payne", "john.mayer"],
    "Pricing Processes": ["ray.charles", "brad.pitt", "stevie.nix", "peter.dinklage", "jennifer.lawrence", "max.payne", "john.mayer"],
    "Date Roll": ["ray.charles", "brad.pitt", "bob.dillon", "john.mayer"]
};
