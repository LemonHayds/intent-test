import React from "react";
import TabContainer from "../general/TabContainer";

import CreditCardIcon from "../../assets/icons/credit-cards.svg";
import FinancialGrowthIcon from "../../assets/icons/financial-growth.svg";
import LoansIcon from "../../assets/icons/loans.svg";
import MortgagesIcon from "../../assets/icons/mortgages.svg";

const DISCOVER_DATA = [
  {
    title: "Personal Finance",
    topics: [
      {
        icon: LoansIcon,
        title: "Loan Payments",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: FinancialGrowthIcon,
        title: "Financial Growth",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: MortgagesIcon,
        title: "Mortgages",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: CreditCardIcon,
        title: "Credit Cards",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: LoansIcon,
        title: "Loan Payments",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: FinancialGrowthIcon,
        title: "Financial Growth",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: MortgagesIcon,
        title: "Mortgages",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: CreditCardIcon,
        title: "Credit Cards",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
    ],
  },
  {
    title: "Careers",
    topics: [
      {
        icon: LoansIcon,
        title: "Career Example 1",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: FinancialGrowthIcon,
        title: "Career Example 2",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: MortgagesIcon,
        title: "Career Example 3",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: CreditCardIcon,
        title: "Career Example 4",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: LoansIcon,
        title: "Career Example 5",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: FinancialGrowthIcon,
        title: "Career Example 6",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: MortgagesIcon,
        title: "Career Example 7",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: CreditCardIcon,
        title: "Career Example 8",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
    ],
  },
  {
    title: "Start-ups",
    topics: [
      {
        icon: LoansIcon,
        title: "Start-ups Example 1",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: FinancialGrowthIcon,
        title: "Start-ups Example 2",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: MortgagesIcon,
        title: "Start-ups Example 3",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: CreditCardIcon,
        title: "Start-ups Example 4",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: LoansIcon,
        title: "Start-ups Example 5",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: FinancialGrowthIcon,
        title: "Start-ups Example 6",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: MortgagesIcon,
        title: "Start-ups Example 7",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: CreditCardIcon,
        title: "Start-ups Example 8",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
    ],
  },
  {
    title: "Trending",
    topics: [
      {
        icon: LoansIcon,
        title: "Trending Example 1",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: FinancialGrowthIcon,
        title: "Trending Example 2",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: MortgagesIcon,
        title: "Trending Example 3",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: CreditCardIcon,
        title: "Trending Example 4",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: LoansIcon,
        title: "Trending Example 5",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: FinancialGrowthIcon,
        title: "Trending Example 6",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: MortgagesIcon,
        title: "Trending Example 7",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
      {
        icon: CreditCardIcon,
        title: "Trending Example 8",
        summary:
          "Compare rates, crunch numbers and get expert guidance for life.",
      },
    ],
  },
];

const DiscoverContainer = () => {
  return (
    <div className="max-w-[1167px] mx-auto">
      <TabContainer tabs={DISCOVER_DATA} />
    </div>
  );
};

export default DiscoverContainer;
