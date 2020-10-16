import React, {useEffect} from 'react';
import {View, FlatList, ActivityIndicator, ScrollView} from 'react-native';
import styles from './styles';
import AppText from '../../components/atoms/AppText';
import Header from '../../components/atoms/Header';
import {calcHeight, calcWidth} from '../../common/styles';

const Terms = () => {
  return (
    <View style={styles.container}>
      <Header title />
      <View style={styles.newOrder}>
        <AppText style={styles.newOrderText}> سياسة الاستخدام </AppText>
      </View>
      <ScrollView
        style={{padding: calcWidth(15), marginBottom: calcHeight(10)}}>
        <AppText style={styles.header1Text}>Terms and Conditions:</AppText>
        <AppText style={styles.simple}>
          The below Terms of Use (“Terms”) govern your use of Ekwely, limited
          (“Ekwely”) mobile app (“App”), and or other online or offline
          communications (collectively referred to as, the “Services”). By using
          the Services, you agree, without limitation or qualification, to be
          bound by these Terms and the Ekwely Privacy Policy which establishes a
          contractual relationship between you and Ekwely. You should review the
          Terms and Privacy Policy before providing us with any information. If
          you do not agree, please do not use the Services. Ekwely may at its
          sole discretion, modify these Terms at any time. Your continued usage
          of the Services will mean you accept those changes, and you agree to
          comply with all applicable laws and regulations.
        </AppText>
        <AppText style={styles.header2Text}>1. OUR SERVICES</AppText>
        <AppText style={styles.simple}>
          Ekwely provides pick-up and delivery services for dry cleaning,
          laundry, sale products and related services. Pick-up and delivery may
          be requested through the App or by directly contacting Ekwely through
          phone.After scheduling the ordera Ekwely agent will pick up and
          deliver the customer’s laundry.Rinse interacts with local Laundromats
          and other related partners (“Cleaners”) to handle, clean and
          packagethe customers’ clothes.
        </AppText>
        <AppText style={styles.header2Text}>2. USE OF THE APP</AppText>
        <AppText style={styles.header3Text}>User Requirements</AppText>
        <AppText style={styles.simple}>
          You must be 18 years of age or older to use the Services in any
          manner. By using the Services and/or accepting these Terms, you
          certify that you are 18 years or older, and that you have the right,
          authority, and capacity to agree to and abide by these Terms.
        </AppText>
        <AppText style={styles.header3Text}>Use Restrictions</AppText>
        <AppText style={styles.simple}>
          Ekwely alone shall own all right, title and interest, including all
          related intellectual property rights, in and to the Services,
          including all as text, graphics, images, photographs, illustrations,
          trademarks, trade names, service marks, logos, information obtained
          from Ekwely’s licensors, and other materials (“Contents”). These Terms
          do not convey to you any rights of ownership in or related to the
          Services or the Content.
        </AppText>
        <AppText style={styles.header3Text}>
          User Submissions and Account
        </AppText>
        <AppText style={styles.simple}>
          To use the Services, you must first sign up with Ekwely. When signing
          up, we request that you provide certain personal information so that
          we can provide you with the requested Services (such information may
          include name, mobile number, email address, address for pick-up and
          delivery, special preferences). Upon successfully signing up with
          Ekwely, you will be able to access your account by inputting your
          registered e-mail. The personal information you submit to Ekwely is
          governed by the Privacy Policy. To the extent there is an
          inconsistency between the Terms of Use and the Privacy Policy, the
          Privacy Policy shall govern. You are responsible for maintaining the
          confidentiality of your account and for restricting access to your
          devices. You agree to accept responsibility for all activities that
          occur under your account. Ekwely reserves the right to terminate
          accounts, remove or edit any content, cancel orders or terminate
          accounts in its sole discretion.
        </AppText>
        <AppText style={styles.header3Text}>Item Count</AppText>
        <AppText style={styles.simple}>
          Ekwely’s pickup agent will pick up your clothes in the designated
          custom bags. The agent will always offer to count the items to confirm
          the number at collection. You has the right to refuse count at the
          door, in this case the item count in the facility is considered the
          benchmark and cannot be refuted. In the normal case that the doorstep
          count occurs, the Ekwely agent will count every item handed by you for
          cleaning and update the system with the total number. The count at
          collection will not include inspection of the garments. Detailed
          inspection will occur when the order is brought back to the facility
          and if any defects, damages or stains are found, you will be notified
          before your order is processed. Ekwely reserves to right to refuse the
          cleaning of an item and inform the customer via call. In the case that
          the counts do not match, Ekwely will proceed with cleaning the clothes
          and inform the user by phone maximum one day later of the difference.
        </AppText>
        <AppText style={styles.header3Text}>Payment </AppText>
        <AppText style={styles.simple}>
          of the App is free of charge. Ekwely reserves the right to introduce a
          fee for the use of these Services. If Ekwely decides to introduce such
          a fee, Ekwely will inform you accordingly and allow you to either
          continue or terminate the Services. Ekwely charges for the services
          that you request, which may include Iron, dry clean, wash & iron, sale
          products or related services ("Cleaning"). You agree that you will pay
          for all Cleaning you purchase through Ekwely, and that Ekwely may
          charge you when registering for the Services for the Cleaning
          (including any taxes, late fees, or additional fees as applicable)
          that may be accrued by or in connection with your account. You are
          responsible for the timely payment of all fees and for providing
          Ekwely with payment of all fees upon completion of the service. Any
          payment made is non-refundable. You will receive an email invoice with
          all the number of items in our care and their details as well as the
          charges associated with your order and the due amount minus any
          promotions. If you see a discrepancy with the number of items or order
          details, you should contact usimmediately and inform the Ekwely team
          of the discrepancy. All payments will be settled in cash upon delivery
          of your clothes. Ekwely may use a third-party payment processor
          ("Payment Processor") to link your credit card account to the
          Services. The processing of payments or in connection with your use of
          the Services will be subject to the terms and privacy policies of the
          Payment Processor and your credit card issuer in addition to these
          Terms. Ekwely is not responsible for any errors by the Payment
          Processor.
        </AppText>
        <AppText style={styles.header3Text}>Promotions </AppText>
        <AppText style={styles.simple}>
          Any and all offers, discounts or promotions advertised on the Services
          are void where prohibitedand are subject to the related rules and
          conditions to such promotions or offers. Liability There is an
          inherent risk in Cleaning and there is potential for clothing and
          related items to get lost or damaged. Ekwely will do its best to
          ensure situations like this do not happen, and in the instances, they
          do happen, will work with you to amend the situation when you provide
          us with written notification identifying the concern with the
          Cleaning. Without prejudice to the foregoing, and insofar as allowed
          under mandatory applicable law, Ekwely’s aggregate liability in no
          event shall exceed an amount of EGP 250 or, where applicable, the
          equivalent of that amount in the currency used by you for the payment
          for Cleaning.
        </AppText>
        <AppText style={styles.header3Text}>Damaged Items </AppText>
        <AppText style={styles.simple}>
          We do our best to prevent any damages to your clothes, unfortunately
          every garment, regardless of brand or quality, will wear out over
          time, and Ekwely can’t do anything about that. For any items deemed
          damaged because of our process, Ekwely may reimburse you by paying up
          to ten (5) times the priceof cleaning that item regardless of price,
          brand, or condition of the garment. Any damaged items must be reported
          to our e-mail or phone within the same day of delivery with photo
          proof and inspected by our Ekwely team in-person. For damage related
          to normal wear and tear, Ekwely does not provide reimbursement or
          compensation.
        </AppText>
        <AppText style={styles.simple}>
          Below is what’s considered to be normal wear and tear per industry
          standards:
        </AppText>
        <AppText style={styles.simple}>
          • Shrinkage from repeated laundering
        </AppText>
        <AppText style={styles.simple}>• Small holes or tears</AppText>
        <AppText style={styles.simple}>• Color fading</AppText>
        <AppText style={styles.simple}>• Thinning of fabric</AppText>
        <AppText style={styles.simple}>
          • Discoloration caused by hygiene or beauty products (perfume or
          deodorant)
        </AppText>
        <AppText style={styles.simple}>• Button damage</AppText>
        <AppText style={styles.header3Text}>Indemnification</AppText>
        <AppText style={styles.simple}>
          By accepting the Terms and using the App or the Services, you agree
          that you shall defend, indemnify and hold Ekwely, any of its
          affiliates, its licensors, and each of their officers, directors,
          other users, employees, attorneys, agents and suppliers harmless from
          and against any and all claims, costs, damages, losses, liabilities
          and expenses (including attorneys’ fees and costs) arising out of or
          in connection with: (a) your violation or breach of any term of the
          Terms or any applicable law or regulation, whether or not referenced
          herein; (b) your violation of any rights of any third party, or (c)
          your misuse of the App the Services
        </AppText>
      </ScrollView>
    </View>
  );
};

export default Terms;
