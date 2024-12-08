package org.sid.billingservice.entities;

import org.springframework.data.rest.core.config.Projection;

import java.util.Date;

@Projection(name="fullOrder",types=Bill.class)
public interface BillingProjection {
    Long getId();
    Date getBillDate();
    Long getCustomerId();


}
